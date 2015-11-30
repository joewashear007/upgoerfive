declare module "inflection" {
  function indexOf(arr: any[], item: any, from_index?: number, compare_func?: Function);
  function pluralize(str: string, plural?: string);
  function singularize(str: string, singular?: string);
  function inflect(str: string, count: number, singular?: string, plural?: string);
  function camelize(str: string, low_first_letter?: boolean);
  function underscore(str: string, all_upper_case?: boolean);
  function humanize(str: string, low_first_letter?: boolean);
  function capitalize(str: string);
  function dasherize(str: string);
  function titleize(str: string);
  function demodulize(str: string);
  function tableize(str: string);
  function classify(str: string);
  function foreign_key(str: string, drop_id_ubar?: boolean);
  function ordinalize(str: string);
  function transform(str: string, arr: any[]);
}
