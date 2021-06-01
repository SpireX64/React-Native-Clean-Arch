import React, {useContext, useMemo} from 'react';
import {createAppContainer} from '../../../di/containers/AppContainer';
import {interfaces} from 'inversify';

const DIContext = React.createContext<Record<string, interfaces.Container>>({});

const containers = {
  app: createAppContainer(),
};

export const DIContextProvider: React.FC = p => (
  <DIContext.Provider value={containers}>
    {p.children}
  </DIContext.Provider>
);

/**
 * Разрешает зависимости компонента с помощью Inversify контейнера,
 * что храниться в контексте 'DIContext' с сохранением типизации
 * @param key - Ключ контейнера в контексте
 * @param resolver - Функция разрешающая зависимости
 * @param WrappedComponent - Компонент, в который встраиваются зависимости
 */
export function withDependencies<T extends Partial<P>, P>(
  key: keyof typeof containers,
  resolver: (c: interfaces.Container) => T,
  WrappedComponent: React.ComponentType<P>,
) {
  return (props: Omit<P, keyof ReturnType<typeof resolver>>) => {
    const diContext = useContext(DIContext);
    const dependencies = useMemo(() => {
      const container = diContext[key];
      return resolver(container);
    }, [diContext]);
    const propsWithDependencies = {...dependencies, ...props} as P & T;
    return <WrappedComponent {...propsWithDependencies} />;
  };
}
