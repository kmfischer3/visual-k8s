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
