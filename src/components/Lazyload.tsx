/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Suspense } from "react";
import { Loading } from "./Loading";

interface propsLazyLoad {
  Component: any;
}

export const Lazyload = ({ Component }: propsLazyLoad) => {
  return (
    <Suspense fallback={<Loading />}>
      <Component />
    </Suspense>
  );
};
