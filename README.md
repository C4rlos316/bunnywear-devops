<div align="center">

# 🐰 BunnyWear DevOps

**Plataforma de e-commerce desplegada sobre Kubernetes con observabilidad completa y CI/CD automatizado.**

[![Kubernetes](https://img.shields.io/badge/Kubernetes-1.29-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)](https://kubernetes.io/)
[![Django](https://img.shields.io/badge/Django-REST-092E20?style=for-the-badge&logo=django&logoColor=white)](https://www.djangoproject.com/)
[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Docker](https://img.shields.io/badge/Docker-Hub-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://hub.docker.com/)

[![Prometheus](https://img.shields.io/badge/Prometheus-Metrics-E6522C?style=for-the-badge&logo=prometheus&logoColor=white)](https://prometheus.io/)
[![Grafana](https://img.shields.io/badge/Grafana-Dashboards-F46800?style=for-the-badge&logo=grafana&logoColor=white)](https://grafana.com/)
[![Loki](https://img.shields.io/badge/Loki-Logs-F5A623?style=for-the-badge&logo=grafana&logoColor=white)](https://grafana.com/oss/loki/)
[![Tekton](https://img.shields.io/badge/Tekton-CI/CD-FD495C?style=for-the-badge&logo=tekton&logoColor=white)](https://tekton.dev/)
[![ArgoCD](https://img.shields.io/badge/ArgoCD-GitOps-EF7B4D?style=for-the-badge&logo=argo&logoColor=white)](https://argoproj.github.io/)

![Last Commit](https://img.shields.io/github/last-commit/C4rlos316/bunnywear-devops?style=flat-square&color=green)
![Repo Size](https://img.shields.io/github/repo-size/C4rlos316/bunnywear-devops?style=flat-square&color=blue)

</div>

---

## 📋 Tabla de contenidos

- [Autor](#-autor)
- [Descripción](#-descripción)
- [Arquitectura](#️-arquitectura)
- [Stack tecnológico](#-stack-tecnológico)
- [Estructura del repositorio](#-estructura-del-repositorio)
- [Servicios expuestos](#-servicios-expuestos)
- [CI/CD — Flujo completo](#️-cicd--flujo-completo)
- [Observabilidad](#-observabilidad)
- [Alertas](#-alertas-configuradas)
- [Backup automático](#-backup-automático)
- [Alta disponibilidad](#️-alta-disponibilidad)
- [Documentación](#-documentación)

---

## 👤 Autor

**Carlos Mario Hernández Gutiérrez**  
Facultad de Ingeniería  
Temas Selectos de Ingeniería en Computación II · 2026

---

## �📌 Descripción

BunnyWear es una tienda de ropa streetwear desplegada completamente sobre un clúster **Kubernetes bare-metal** con observabilidad full-stack, pipelines CI/CD con Tekton y despliegue GitOps con ArgoCD.

> Proyecto académico de infraestructura DevOps — demostración de un entorno productivo real sobre VMs locales con Rocky Linux 9.

---

## 🏗️ Arquitectura

```
┌─────────────────────────────────────────────────────────┐
│                    Clúster Kubernetes                    │
│                                                         │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐  │
│  │  Next.js 16 │───▶│  Django REST│───▶│  MySQL 8.0  │  │
│  │  Frontend   │    │  Backend    │    │  StatefulSet│  │
│  └─────────────┘    └─────────────┘    └─────────────┘  │
│                                                         │
│  ┌──────────────────────────────────────────────────┐   │
│  │              Observabilidad                      │   │
│  │  Prometheus · Grafana · Loki · Tempo · OTel      │   │
│  └──────────────────────────────────────────────────┘   │
│                                                         │
│  ┌──────────────────────────────────────────────────┐   │
│  │              CI/CD GitOps                        │   │
│  │  Tekton Pipelines  ·  ArgoCD                     │   │
│  └──────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

**Clúster:** 1 master + 2 workers · Flannel CNI · Rocky Linux 9  
**Almacenamiento:** NFS con CSI driver · StorageClass `nfs-csi`

---

## 🚀 Stack tecnológico

| Capa | Tecnología |
|------|-----------|
| **Frontend** | Next.js 16 · React 19 · Tailwind CSS v4 |
| **Backend** | Django 4 · Django REST Framework · Gunicorn |
| **Base de datos** | MySQL 8.0 · StatefulSet · PVC NFS |
| **Contenedores** | Docker · Kaniko · DockerHub |
| **Orquestación** | Kubernetes 1.29 · Rocky Linux 9 |
| **CI/CD** | Tekton Pipelines · ArgoCD |
| **Métricas** | Prometheus · Grafana · node-exporter · kube-state-metrics |
| **Logs** | Loki · Promtail |
| **Trazas** | OpenTelemetry · Tempo |
| **Alertas** | Prometheus Alertmanager |
| **Alta disponibilidad** | PodDisruptionBudget |
| **Backups** | CronJob MySQL → NFS |

---

## 📂 Estructura del repositorio

```
bunnywear-devops/
├── backend/                  # Django REST API
│   ├── bunnywear/            # Configuración principal
│   ├── products/             # App de productos
│   ├── tracing.py            # OpenTelemetry setup
│   └── Dockerfile
├── frontend/                 # Next.js App
│   ├── src/
│   │   ├── app/              # Pages (App Router)
│   │   └── components/       # Hero, Navbar, ProductGrid, Footer...
│   └── Dockerfile
├── k8s/                      # Manifiestos Kubernetes
│   ├── 01-jobs-seeding/      # Job seed de productos
│   ├── 02-mysql/             # StatefulSet MySQL
│   ├── 03-backend-django/    # Deployment backend
│   ├── 04-frontend-nextjs/   # Deployment frontend
│   ├── 05-monitoring/        # Prometheus + Grafana
│   ├── 06-logging/           # Loki + Promtail
│   ├── 08-backups/           # CronJob backup MySQL
│   ├── 09-tracing/           # Tempo
│   ├── 10-alerting/          # Alertmanager + reglas
│   ├── 11-gitops/            # ArgoCD + Tekton pipelines
│   └── 11-high-availability/ # PodDisruptionBudget
└── docs/                     # Documentación y guiones de demo
```

---

## 🌐 Servicios expuestos

| Servicio | URL |
|----------|-----|
| **Frontend** | `http://192.168.223.134:32365` |
| **Backend API** | `http://192.168.223.134:30729/api/products/` |
| **Grafana** | `http://192.168.223.134:30300` |
| **Prometheus** | `http://192.168.223.134:30090` |
| **Alertmanager** | `http://192.168.223.134:30903` |

---

## ⚙️ CI/CD — Flujo completo

```
Código fuente                 Imagen Docker              Kubernetes
     │                              │                        │
git push ──▶ Tekton Pipeline ──▶ DockerHub ──▶ ArgoCD sync ──▶ Deploy
              (Kaniko build)       :latest      (GitOps)
```

### Desplegar cambios de código (frontend o backend)

```bash
# 1. Commit y push
git add . && git commit -m "feat: descripción del cambio" && git push

# 2. Construir imagen con Tekton (en VM master)
git pull
kubectl create -f k8s/11-gitops/07-run-frontend.yaml   # o 04-run-backend.yaml
kubectl get pipelinerun -n tekton-pipelines -w          # esperar Succeeded

# 3. Redesplegar
kubectl rollout restart deployment bunnywear-frontend -n bunnywear
```

### Desplegar cambios de infraestructura (YAMLs)

```bash
# ArgoCD lo detecta y aplica automáticamente tras el push
git add . && git commit -m "infra: descripción" && git push
```

---

## 📊 Observabilidad

### Métricas — Grafana Dashboards

| Dashboard | Descripción |
|-----------|-------------|
| **Django** | Request rate, latencia, errores HTTP del backend |
| **K8s Views / Global** | Vista general del clúster — pods, namespaces, CPU/RAM |
| **K8s Views / Nodes** | Recursos por nodo (master, worker-1, worker-2) |
| **Node Exporter Full** | Métricas detalladas de hardware y OS |

### Logs — Loki

```logql
{namespace="bunnywear"}                          # todos los logs de la app
{namespace="bunnywear"} |= "GET /api/products"   # requests al API
{namespace="bunnywear"} |= "ERROR"               # solo errores
```

### Trazas — Tempo + OpenTelemetry

El backend instrumenta automáticamente cada request HTTP con spans exportados vía OTLP gRPC a Tempo, visualizables en Grafana → Explore → Tempo.

---

## 🔔 Alertas configuradas

| Alerta | Condición | Severidad |
|--------|-----------|-----------|
| `DjangoBackendDown` | Backend sin respuesta > 1 min | critical |
| `FrontendDown` | Frontend sin respuesta > 1 min | critical |
| `PodCrashLooping` | Pod reiniciando repetidamente | warning |
| `BackendReplicasMissing` | Réplicas disponibles < 1 | critical |

---

## 💾 Backup automático

CronJob nocturno que ejecuta `mysqldump` y guarda el backup en volumen NFS:

```bash
# Forzar backup manual
kubectl create job --from=cronjob/mysql-backup manual-backup-$(date +%s) -n bunnywear

# Ver backups generados
kubectl exec -n bunnywear <pod-nfs> -- ls /backups/mysql/
```

---

## 🛡️ Alta disponibilidad

PodDisruptionBudget garantiza mínimo 1 réplica del backend disponible en todo momento:

```bash
kubectl get pdb -n bunnywear
```

---

## 📚 Documentación

| Documento | Descripción |
|-----------|-------------|
| [`docs/guion-grafana-dashboards.md`](docs/guion-grafana-dashboards.md) | Guía dashboards Grafana |
| [`docs/guion-loki-logs.md`](docs/guion-loki-logs.md) | Guía logs con Loki |
| [`docs/guion-tempo-trazas.md`](docs/guion-tempo-trazas.md) | Guía trazas con Tempo |
| [`docs/guion-alertmanager.md`](docs/guion-alertmanager.md) | Guía Alertmanager |
| [`docs/guion-cronjob-backup.md`](docs/guion-cronjob-backup.md) | Guía backup MySQL |
| [`docs/guion-pdb-alta-disponibilidad.md`](docs/guion-pdb-alta-disponibilidad.md) | Guía PDB |
| [`DOCUMENTACION-TECNICA.md`](DOCUMENTACION-TECNICA.md) | Documentación técnica completa |

---

<div align="center">

**BunnyWear DevOps** · Proyecto académico · 2026

![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red?style=flat-square)
![Kubernetes](https://img.shields.io/badge/Runs%20on-Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white)
![Rocky Linux](https://img.shields.io/badge/OS-Rocky%20Linux%209-10B981?style=flat-square&logo=rockylinux&logoColor=white)

</div>
