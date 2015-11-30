interface String {
  endsWith(searchString, position): boolean;
}

if (!String.prototype.endsWith) {
  String.prototype.endsWith = function(searchString: string, position?: number) {
      var subjectString = this.toString();
      if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
        position = subjectString.length;
      }
      position -= searchString.length;
      var lastIndex = subjectString.indexOf(searchString, position);
      return lastIndex !== -1 && lastIndex === position;
  };
}
