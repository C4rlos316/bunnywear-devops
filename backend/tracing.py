import os

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "bunnywear.settings")

from opentelemetry import trace
from opentelemetry.sdk.resources import Resource
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import BatchSpanProcessor
from opentelemetry.exporter.otlp.proto.grpc.trace_exporter import OTLPSpanExporter
from opentelemetry.instrumentation.django import DjangoInstrumentor

resource = Resource.create({
    "service.name": "django-backend"
})

provider = TracerProvider(resource=resource)

processor = BatchSpanProcessor(
    OTLPSpanExporter(
        endpoint="tempo.monitoring.svc.cluster.local:4317",
        insecure=True
    )
)

provider.add_span_processor(processor)

trace.set_tracer_provider(provider)

DjangoInstrumentor().instrument()
