// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getPropertyValueFromNames(propertyNames: string[], unknownObject: any) {
  return propertyNames.reduce(
    (unknownObject, propertyName) => unknownObject[propertyName],
    unknownObject,
  );
}
