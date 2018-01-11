function killNode(node_id) {
  if (!node_id)
    return;

  // -webkit-animation: flash-dead 1s infinite;
  // -moz-animation: flash-dead 1s infinite;
  // -o-animation: flash-dead 1s infinite;
  // animation: flash-dead 1s infinite;

  document.getElementById(node_id).style.animation = "flash-dead 1s infinite";
  return;
}

function listPods() {
  for (var i = 0; i < Object.keys(data.items).length; i ++) {
    var name = data.items[i].metadata.name;
    var namespace = data.items[i].metadata.namespace;
    var status = data.items[i].status.phase;
    var curr_pod = pod.construct(name, namespace, status);
    console.log(curr_pod);
  }
}

function test() {

  var svg_div = document.getElementById("red-master-pod-space");

  for (var i = 0; i < 11; i++) {
    var pod_html = '<rect class="pod" width="50" height="70"/>';
    document.getElementById("red-master-pod-space").innerHTML += pod_html;
  }

}

function trimString(name, length) {
  return name.substring(0, length);
}

function addPod(pod_name, podspace_id) {
  if ( !pod_name || !podspace_id ) {
    console.log("pod_name and/or podspace_id are empty");
    return;
  }

  var trimmed_pod_name = trimString(pod_name, 25);

  var pod_html = '<rect x="0" y="0" width="200" height="50"/><text x="5" y="25">'+trimmed_pod_name+'</text>';
  document.getElementById(podspace_id).innerHTML += pod_html;

}
