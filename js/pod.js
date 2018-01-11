var pod = {

  NAME: "",
  NAMESPACE: "",
  STATUS: "",

  validate: function() {
    if (pod.NAME && pod.NAMESPACE && pod.STATUS)
      return true;
    else
      return false;
  },

  construct: function(name, namespace, status) {
    pod.setName(name);
    pod.setNamespace(namespace);
    pod.setStatus(status);

    return pod;
  },

  setName: function(name) {
    pod.NAME = name;
  },

  setNamespace: function(namespace) {
    pod.NAMESPACE = namespace;
  },

  setStatus: function(status) {
    pod.STATUS = status;
  },

  generateSVG: function() {
    if (pod.validate())
      return '<rect x="0" y="0" width="200" height="50"/><text x="5" y="25" fill="white">'+pod.NAME+'</text>';
  }

};
