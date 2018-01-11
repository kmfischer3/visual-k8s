var data = {
  "kind": "PodList",
  "apiVersion": "v1",
  "metadata": {
    "selfLink": "/api/v1/namespaces/kube-system/pods",
    "resourceVersion": "1059786"
  },
  "items": [
    {
      "metadata": {
        "name": "kube-addon-manager-minikube",
        "namespace": "kube-system",
        "selfLink": "/api/v1/namespaces/kube-system/pods/kube-addon-manager-minikube",
        "uid": "3e2b2923-8a8d-11e7-a8d9-080027642ed5",
        "resourceVersion": "1039967",
        "creationTimestamp": "2017-08-26T18:34:49Z",
        "labels": {
          "component": "kube-addon-manager",
          "kubernetes.io/minikube-addons": "addon-manager",
          "version": "v6.4"
        },
        "annotations": {
          "kubernetes.io/config.hash": "c654b2f084cf26941c334a2c3d6db53d",
          "kubernetes.io/config.mirror": "c654b2f084cf26941c334a2c3d6db53d",
          "kubernetes.io/config.seen": "2017-08-26T18:34:44.467992057Z",
          "kubernetes.io/config.source": "file"
        }
      },
      "spec": {
        "volumes": [
          {
            "name": "addons",
            "hostPath": {
              "path": "/etc/kubernetes/"
            }
          }
        ],
        "containers": [
          {
            "name": "kube-addon-manager",
            "image": "gcr.io/google-containers/kube-addon-manager:v6.4-beta.2",
            "resources": {
              "requests": {
                "cpu": "5m",
                "memory": "50Mi"
              }
            },
            "volumeMounts": [
              {
                "name": "addons",
                "readOnly": true,
                "mountPath": "/etc/kubernetes/"
              }
            ],
            "terminationMessagePath": "/dev/termination-log",
            "terminationMessagePolicy": "File",
            "imagePullPolicy": "IfNotPresent"
          }
        ],
        "restartPolicy": "Always",
        "terminationGracePeriodSeconds": 30,
        "dnsPolicy": "ClusterFirst",
        "nodeName": "minikube",
        "hostNetwork": true,
        "securityContext": {},
        "schedulerName": "default-scheduler",
        "tolerations": [
          {
            "operator": "Exists",
            "effect": "NoExecute"
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
            "lastTransitionTime": "2017-08-26T18:34:49Z"
          },
          {
            "type": "Ready",
            "status": "True",
            "lastProbeTime": null,
            "lastTransitionTime": "2017-11-04T15:23:13Z"
          },
          {
            "type": "PodScheduled",
            "status": "True",
            "lastProbeTime": null,
            "lastTransitionTime": "2017-11-04T15:22:56Z"
          }
        ],
        "hostIP": "192.168.99.100",
        "podIP": "192.168.99.100",
        "startTime": "2017-08-26T18:34:49Z",
        "containerStatuses": [
          {
            "name": "kube-addon-manager",
            "state": {
              "running": {
                "startedAt": "2017-11-04T15:23:13Z"
              }
            },
            "lastState": {
              "terminated": {
                "exitCode": 137,
                "reason": "Error",
                "startedAt": "2017-11-04T15:22:39Z",
                "finishedAt": "2017-11-04T15:23:12Z",
                "containerID": "docker://2fab4013b2fce544f9dfebcc4ed70e370ade5c8e629edc3792a2851a30c5a737"
              }
            },
            "ready": true,
            "restartCount": 4,
            "image": "gcr.io/google-containers/kube-addon-manager:v6.4-beta.2",
            "imageID": "docker-pullable://gcr.io/google-containers/kube-addon-manager@sha256:3e6ff32eb762ecf17d817c49372f4fe51052d3406772ddb0a65f89c478070b96",
            "containerID": "docker://413541982f465d205e044226842c95207aaf1aca5e06e57bf01c0be898ee216b"
          }
        ],
        "qosClass": "Burstable"
      }
    },
    {
      "metadata": {
        "name": "kube-dns-910330662-l4ppr",
        "generateName": "kube-dns-910330662-",
        "namespace": "kube-system",
        "selfLink": "/api/v1/namespaces/kube-system/pods/kube-dns-910330662-l4ppr",
        "uid": "438bf869-8a8d-11e7-a8d9-080027642ed5",
        "resourceVersion": "1039943",
        "creationTimestamp": "2017-08-26T18:34:58Z",
        "labels": {
          "k8s-app": "kube-dns",
          "pod-template-hash": "910330662"
        },
        "annotations": {
          "kubernetes.io/created-by": "{\"kind\":\"SerializedReference\",\"apiVersion\":\"v1\",\"reference\":{\"kind\":\"ReplicaSet\",\"namespace\":\"kube-system\",\"name\":\"kube-dns-910330662\",\"uid\":\"438af08f-8a8d-11e7-a8d9-080027642ed5\",\"apiVersion\":\"extensions\",\"resourceVersion\":\"139\"}}\n",
          "scheduler.alpha.kubernetes.io/critical-pod": ""
        },
        "ownerReferences": [
          {
            "apiVersion": "extensions/v1beta1",
            "kind": "ReplicaSet",
            "name": "kube-dns-910330662",
            "uid": "438af08f-8a8d-11e7-a8d9-080027642ed5",
            "controller": true,
            "blockOwnerDeletion": true
          }
        ]
      },
      "spec": {
        "volumes": [
          {
            "name": "kube-dns-config",
            "configMap": {
              "name": "kube-dns",
              "defaultMode": 420,
              "optional": true
            }
          },
          {
            "name": "default-token-1ckln",
            "secret": {
              "secretName": "default-token-1ckln",
              "defaultMode": 420
            }
          }
        ],
        "containers": [
          {
            "name": "kubedns",
            "image": "gcr.io/google_containers/k8s-dns-kube-dns-amd64:1.14.4",
            "args": [
              "--domain=cluster.local.",
              "--dns-port=10053",
              "--config-map=kube-dns",
              "--v=2"
            ],
            "ports": [
              {
                "name": "dns-local",
                "containerPort": 10053,
                "protocol": "UDP"
              },
              {
                "name": "dns-tcp-local",
                "containerPort": 10053,
                "protocol": "TCP"
              },
              {
                "name": "metrics",
                "containerPort": 10055,
                "protocol": "TCP"
              }
            ],
            "env": [
              {
                "name": "PROMETHEUS_PORT",
                "value": "10055"
              }
            ],
            "resources": {
              "limits": {
                "memory": "170Mi"
              },
              "requests": {
                "cpu": "100m",
                "memory": "70Mi"
              }
            },
            "volumeMounts": [
              {
                "name": "kube-dns-config",
                "mountPath": "/kube-dns-config"
              },
              {
                "name": "default-token-1ckln",
                "readOnly": true,
                "mountPath": "/var/run/secrets/kubernetes.io/serviceaccount"
              }
            ],
            "livenessProbe": {
              "httpGet": {
                "path": "/healthcheck/kubedns",
                "port": 10054,
                "scheme": "HTTP"
              },
              "initialDelaySeconds": 60,
              "timeoutSeconds": 5,
              "periodSeconds": 10,
              "successThreshold": 1,
              "failureThreshold": 5
            },
            "readinessProbe": {
              "httpGet": {
                "path": "/readiness",
                "port": 8081,
                "scheme": "HTTP"
              },
              "initialDelaySeconds": 3,
              "timeoutSeconds": 5,
              "periodSeconds": 10,
              "successThreshold": 1,
              "failureThreshold": 3
            },
            "terminationMessagePath": "/dev/termination-log",
            "terminationMessagePolicy": "File",
            "imagePullPolicy": "IfNotPresent"
          },
          {
            "name": "dnsmasq",
            "image": "gcr.io/google_containers/k8s-dns-dnsmasq-nanny-amd64:1.14.4",
            "args": [
              "-v=2",
              "-logtostderr",
              "-configDir=/etc/k8s/dns/dnsmasq-nanny",
              "-restartDnsmasq=true",
              "--",
              "-k",
              "--cache-size=1000",
              "--log-facility=-",
              "--server=/cluster.local/127.0.0.1#10053",
              "--server=/in-addr.arpa/127.0.0.1#10053",
              "--server=/ip6.arpa/127.0.0.1#10053"
            ],
            "ports": [
              {
                "name": "dns",
                "containerPort": 53,
                "protocol": "UDP"
              },
              {
                "name": "dns-tcp",
                "containerPort": 53,
                "protocol": "TCP"
              }
            ],
            "resources": {
              "requests": {
                "cpu": "150m",
                "memory": "20Mi"
              }
            },
            "volumeMounts": [
              {
                "name": "kube-dns-config",
                "mountPath": "/etc/k8s/dns/dnsmasq-nanny"
              },
              {
                "name": "default-token-1ckln",
                "readOnly": true,
                "mountPath": "/var/run/secrets/kubernetes.io/serviceaccount"
              }
            ],
            "livenessProbe": {
              "httpGet": {
                "path": "/healthcheck/dnsmasq",
                "port": 10054,
                "scheme": "HTTP"
              },
              "initialDelaySeconds": 60,
              "timeoutSeconds": 5,
              "periodSeconds": 10,
              "successThreshold": 1,
              "failureThreshold": 5
            },
            "terminationMessagePath": "/dev/termination-log",
            "terminationMessagePolicy": "File",
            "imagePullPolicy": "IfNotPresent"
          },
          {
            "name": "sidecar",
            "image": "gcr.io/google_containers/k8s-dns-sidecar-amd64:1.14.4",
            "args": [
              "--v=2",
              "--logtostderr",
              "--probe=kubedns,127.0.0.1:10053,kubernetes.default.svc.cluster.local.,5,A",
              "--probe=dnsmasq,127.0.0.1:53,kubernetes.default.svc.cluster.local.,5,A"
            ],
            "ports": [
              {
                "name": "metrics",
                "containerPort": 10054,
                "protocol": "TCP"
              }
            ],
            "resources": {
              "requests": {
                "cpu": "10m",
                "memory": "20Mi"
              }
            },
            "volumeMounts": [
              {
                "name": "default-token-1ckln",
                "readOnly": true,
                "mountPath": "/var/run/secrets/kubernetes.io/serviceaccount"
              }
            ],
            "livenessProbe": {
              "httpGet": {
                "path": "/metrics",
                "port": 10054,
                "scheme": "HTTP"
              },
              "initialDelaySeconds": 60,
              "timeoutSeconds": 5,
              "periodSeconds": 10,
              "successThreshold": 1,
              "failureThreshold": 5
            },
            "terminationMessagePath": "/dev/termination-log",
            "terminationMessagePolicy": "File",
            "imagePullPolicy": "IfNotPresent"
          }
        ],
        "restartPolicy": "Always",
        "terminationGracePeriodSeconds": 30,
        "dnsPolicy": "Default",
        "serviceAccountName": "default",
        "serviceAccount": "default",
        "nodeName": "minikube",
        "securityContext": {},
        "schedulerName": "default-scheduler",
        "tolerations": [
          {
            "key": "CriticalAddonsOnly",
            "operator": "Exists"
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
            "lastTransitionTime": "2017-08-26T18:34:58Z"
          },
          {
            "type": "Ready",
            "status": "True",
            "lastProbeTime": null,
            "lastTransitionTime": "2017-11-04T15:23:01Z"
          },
          {
            "type": "PodScheduled",
            "status": "True",
            "lastProbeTime": null,
            "lastTransitionTime": "2017-08-26T18:34:58Z"
          }
        ],
        "hostIP": "192.168.99.100",
        "podIP": "172.17.0.2",
        "startTime": "2017-08-26T18:34:58Z",
        "containerStatuses": [
          {
            "name": "dnsmasq",
            "state": {
              "running": {
                "startedAt": "2017-11-04T15:22:39Z"
              }
            },
            "lastState": {
              "terminated": {
                "exitCode": 0,
                "reason": "Completed",
                "startedAt": "2017-11-04T14:58:37Z",
                "finishedAt": "2017-11-04T15:22:35Z",
                "containerID": "docker://335c80367cf53e70abd722b3d4a58a684dafba2f96647f58ab5c1a5e7318e929"
              }
            },
            "ready": true,
            "restartCount": 3,
            "image": "gcr.io/google_containers/k8s-dns-dnsmasq-nanny-amd64:1.14.4",
            "imageID": "docker-pullable://gcr.io/google_containers/k8s-dns-dnsmasq-nanny-amd64@sha256:aeeb994acbc505eabc7415187cd9edb38cbb5364dc1c2fc748154576464b3dc2",
            "containerID": "docker://57ae8da3900d170d8417e607c661082f2ee3dbfccdbc1a7550fdd4c781842207"
          },
          {
            "name": "kubedns",
            "state": {
              "running": {
                "startedAt": "2017-11-04T15:22:39Z"
              }
            },
            "lastState": {
              "terminated": {
                "exitCode": 0,
                "reason": "Completed",
                "startedAt": "2017-11-04T14:58:38Z",
                "finishedAt": "2017-11-04T15:22:34Z",
                "containerID": "docker://a99bfe9472dc0c3b810a0d88f70e2c6e28f9433d4d87cb375b1da7e7e486574e"
              }
            },
            "ready": true,
            "restartCount": 3,
            "image": "gcr.io/google_containers/k8s-dns-kube-dns-amd64:1.14.4",
            "imageID": "docker-pullable://gcr.io/google_containers/k8s-dns-kube-dns-amd64@sha256:40790881bbe9ef4ae4ff7fe8b892498eecb7fe6dcc22661402f271e03f7de344",
            "containerID": "docker://6cb8379fc55e2c18b080a7d246e7b43bcb13daa70423dc62a464f58991234327"
          },
          {
            "name": "sidecar",
            "state": {
              "running": {
                "startedAt": "2017-11-04T15:22:40Z"
              }
            },
            "lastState": {
              "terminated": {
                "exitCode": 0,
                "reason": "Completed",
                "startedAt": "2017-11-04T14:58:37Z",
                "finishedAt": "2017-11-04T15:22:25Z",
                "containerID": "docker://a1d9b61a8c3f9b4aa782aa8f4c0d486df7483e9b3c89d0640b2d8d169ea57c6c"
              }
            },
            "ready": true,
            "restartCount": 3,
            "image": "gcr.io/google_containers/k8s-dns-sidecar-amd64:1.14.4",
            "imageID": "docker-pullable://gcr.io/google_containers/k8s-dns-sidecar-amd64@sha256:97074c951046e37d3cbb98b82ae85ed15704a290cce66a8314e7f846404edde9",
            "containerID": "docker://3c7ae1fbe7a4e104b054559716199132684ff2d3b226342d71701172b4dee73a"
          }
        ],
        "qosClass": "Burstable"
      }
    },
    {
      "metadata": {
        "name": "kubernetes-dashboard-c7t7n",
        "generateName": "kubernetes-dashboard-",
        "namespace": "kube-system",
        "selfLink": "/api/v1/namespaces/kube-system/pods/kubernetes-dashboard-c7t7n",
        "uid": "437dac9c-8a8d-11e7-a8d9-080027642ed5",
        "resourceVersion": "1039897",
        "creationTimestamp": "2017-08-26T18:34:58Z",
        "labels": {
          "addonmanager.kubernetes.io/mode": "Reconcile",
          "app": "kubernetes-dashboard",
          "version": "v1.6.1"
        },
        "annotations": {
          "kubernetes.io/created-by": "{\"kind\":\"SerializedReference\",\"apiVersion\":\"v1\",\"reference\":{\"kind\":\"ReplicationController\",\"namespace\":\"kube-system\",\"name\":\"kubernetes-dashboard\",\"uid\":\"437d6be3-8a8d-11e7-a8d9-080027642ed5\",\"apiVersion\":\"v1\",\"resourceVersion\":\"126\"}}\n"
        },
        "ownerReferences": [
          {
            "apiVersion": "v1",
            "kind": "ReplicationController",
            "name": "kubernetes-dashboard",
            "uid": "437d6be3-8a8d-11e7-a8d9-080027642ed5",
            "controller": true,
            "blockOwnerDeletion": true
          }
        ]
      },
      "spec": {
        "volumes": [
          {
            "name": "default-token-1ckln",
            "secret": {
              "secretName": "default-token-1ckln",
              "defaultMode": 420
            }
          }
        ],
        "containers": [
          {
            "name": "kubernetes-dashboard",
            "image": "gcr.io/google_containers/kubernetes-dashboard-amd64:v1.6.1",
            "ports": [
              {
                "containerPort": 9090,
                "protocol": "TCP"
              }
            ],
            "resources": {},
            "volumeMounts": [
              {
                "name": "default-token-1ckln",
                "readOnly": true,
                "mountPath": "/var/run/secrets/kubernetes.io/serviceaccount"
              }
            ],
            "livenessProbe": {
              "httpGet": {
                "path": "/",
                "port": 9090,
                "scheme": "HTTP"
              },
              "initialDelaySeconds": 30,
              "timeoutSeconds": 30,
              "periodSeconds": 10,
              "successThreshold": 1,
              "failureThreshold": 3
            },
            "terminationMessagePath": "/dev/termination-log",
            "terminationMessagePolicy": "File",
            "imagePullPolicy": "IfNotPresent"
          }
        ],
        "restartPolicy": "Always",
        "terminationGracePeriodSeconds": 30,
        "dnsPolicy": "ClusterFirst",
        "serviceAccountName": "default",
        "serviceAccount": "default",
        "nodeName": "minikube",
        "securityContext": {},
        "schedulerName": "default-scheduler"
      },
      "status": {
        "phase": "Running",
        "conditions": [
          {
            "type": "Initialized",
            "status": "True",
            "lastProbeTime": null,
            "lastTransitionTime": "2017-08-26T18:34:58Z"
          },
          {
            "type": "Ready",
            "status": "True",
            "lastProbeTime": null,
            "lastTransitionTime": "2017-11-04T15:22:40Z"
          },
          {
            "type": "PodScheduled",
            "status": "True",
            "lastProbeTime": null,
            "lastTransitionTime": "2017-08-26T18:34:58Z"
          }
        ],
        "hostIP": "192.168.99.100",
        "podIP": "172.17.0.3",
        "startTime": "2017-08-26T18:34:58Z",
        "containerStatuses": [
          {
            "name": "kubernetes-dashboard",
            "state": {
              "running": {
                "startedAt": "2017-11-04T15:22:39Z"
              }
            },
            "lastState": {
              "terminated": {
                "exitCode": 0,
                "reason": "Completed",
                "startedAt": "2017-11-04T14:58:37Z",
                "finishedAt": "2017-11-04T15:22:25Z",
                "containerID": "docker://93539949fa7c0c35e7251f252447367d6fe8eecb6fb3370d3c9b391af9641a33"
              }
            },
            "ready": true,
            "restartCount": 3,
            "image": "gcr.io/google_containers/kubernetes-dashboard-amd64:v1.6.1",
            "imageID": "docker-pullable://gcr.io/google_containers/kubernetes-dashboard-amd64@sha256:b537ce8988510607e95b8d40ac9824523b1f9029e6f9f90e9fccc663c355cf5d",
            "containerID": "docker://39e6528aac833d2d7b69d1e1c947b720970665d0c3a4751f184990ee0f922a4e"
          }
        ],
        "qosClass": "BestEffort"
      }
    }
  ]
};
