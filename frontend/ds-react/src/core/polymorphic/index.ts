/**
 * @description atomic하고 polymorphic한 컴포넌트를 만들기 위한 함수
 */
export const initAs = (
  type: React.ElementType,
  as?: React.ElementType
): React.ElementType => {
  return as || type;
};

export type PolymorphicRef<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>["ref"];

type AsProp<T extends React.ElementType> = {
  as?: T;
};

export type PolymorphicComponentProps<
  T extends React.ElementType,
  Props = {},
> = AsProp<T> &
  React.ComponentPropsWithoutRef<T> &
  Props & {
    ref?: PolymorphicRef<T>;
  };

export type MakeProps<
  T extends React.ElementType,
  P extends {},
> = PolymorphicComponentProps<T, P>;
