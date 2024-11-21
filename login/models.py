# maintenance_reports/models.py
from django.db import models

class MaintenanceReport(models.Model):
    vehicle_name = models.CharField(max_length=100)
    vehicle_type = models.CharField(max_length=100)
    used_material = models.CharField(max_length=100)
    total_cost = models.DecimalField(max_digits=8, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.vehicle_name
