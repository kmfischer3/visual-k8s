var data = {
  "kind": "PodList",
  "apiVersion": "v1",
  "metadata": {
    "selfLink": "/api/v1/namespaces/default/pods",
    "resourceVersion": "4801995"
  },
  "items": [
    {
      "metadata": {
        "name": "busybox-6944bc9f7b-45ptk",
        "generateName": "busybox-6944bc9f7b-",
        "namespace": "default",
        "selfLink": "/api/v1/namespaces/default/pods/busybox-6944bc9f7b-45ptk",
        "uid": "289e77a2-f713-11e7-97d0-b827eb4da5bf",
        "resourceVersion": "4801977",
        "creationTimestamp": "2018-01-11T21:05:31Z",
        "labels": {
          "pod-template-hash": "2500675936",
          "run": "busybox"
        },
        "annotations": {
          "kubernetes.io/created-by": "{\"kind\":\"SerializedReference\",\"apiVersion\":\"v1\",\"reference\":{\"kind\":\"ReplicaSet\",\"namespace\":\"default\",\"name\":\"busybox-6944bc9f7b\",\"uid\":\"2891596f-f713-11e7-97d0-b827eb4da5bf\",\"apiVersion\":\"extensions\",\"resourceVersion\":\"4801853\"}}\n"
        },
        "ownerReferences": [
          {
            "apiVersion": "extensions/v1beta1",
            "kind": "ReplicaSet",
            "name": "busybox-6944bc9f7b",
            "uid": "2891596f-f713-11e7-97d0-b827eb4da5bf",
            "controller": true,
            "blockOwnerDeletion": true
          }
        ]
      },
      "spec": {
        "volumes": [
          {
            "name": "default-token-h5bm6",
            "secret": {
              "secretName": "default-token-h5bm6",
              "defaultMode": 420
            }
          }
        ],
        "containers": [
          {
            "name": "busybox",
            "image": "busybox",
            "resources": {

            },
            "volumeMounts": [
              {
                "name": "default-token-h5bm6",
                "readOnly": true,
                "mountPath": "/var/run/secrets/kubernetes.io/serviceaccount"
              }
            ],
            "terminationMessagePath": "/dev/termination-log",
            "terminationMessagePolicy": "File",
            "imagePullPolicy": "Always"
          }
        ],
        "restartPolicy": "Always",
        "terminationGracePeriodSeconds": 30,
        "dnsPolicy": "ClusterFirst",
        "serviceAccountName": "default",
        "serviceAccount": "default",
        "nodeName": "green-worker",
        "securityContext": {

        },
        "schedulerName": "default-scheduler",
        "tolerations": [
          {
            "key": "node.alpha.kubernetes.io/notReady",
            "operator": "Exists",
            "effect": "NoExecute",
            "tolerationSeconds": 300
          },
          {
            "key": "node.alpha.kubernetes.io/unreachable",
            "operator": "Exists",
            "effect": "NoExecute",
            "tolerationSeconds": 300
          }
        ]
      },
      "status": {
        "phase": "Running",
        "conditions": [
          {
            "type": "Initialized",
            "status": "True",
            "lastProbeTime": null,
            "lastTransitionTime": "2018-01-11T21:05:31Z"
          },
          {
            "type": "Ready",
            "status": "False",
            "lastProbeTime": null,
            "lastTransitionTime": "2018-01-11T21:06:34Z",
            "reason": "ContainersNotReady",
            "message": "containers with unready status: [busybox]"
          },
          {
            "type": "PodScheduled",
            "status": "True",
            "lastProbeTime": null,
            "lastTransitionTime": "2018-01-11T21:05:31Z"
          }
        ],
        "hostIP": "192.168.0.3",
        "podIP": "10.244.2.4",
        "startTime": "2018-01-11T21:05:31Z",
        "containerStatuses": [
          {
            "name": "busybox",
            "state": {
              "terminated": {
                "exitCode": 0,
                "reason": "Completed",
                "startedAt": "2018-01-11T21:06:32Z",
                "finishedAt": "2018-01-11T21:06:33Z",
                "containerID": "docker://89fce226985bbc0aa47b4028df80484debe1d23837ee6571acd16b141026a748"
              }
            },
            "lastState": {
              "terminated": {
                "exitCode": 0,
                "reason": "Completed",
                "startedAt": "2018-01-11T21:06:04Z",
                "finishedAt": "2018-01-11T21:06:04Z",
                "containerID": "docker://26d6a9f0b5f99c6008c79de1f4eb8429b8eb5d6d0d0fc032edb5d4187a69326b"
              }
            },
            "ready": false,
            "restartCount": 3,
            "image": "busybox:latest",
            "imageID": "docker-pullable://busybox@sha256:436bbf48aa1198ebca8eac0ad9a9c80c8929d9242e02608f76ce18334e0cfe6a",
            "containerID": "docker://89fce226985bbc0aa47b4028df80484debe1d23837ee6571acd16b141026a748"
          }
        ],
        "qosClass": "BestEffort"
      }
    }
  ]
};
