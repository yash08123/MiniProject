# Generated by Django 4.1.7 on 2023-08-21 15:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hi', '0002_remove_user_age_remove_user_email'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='password',
            field=models.CharField(default=False, max_length=100),
        ),
        migrations.AddField(
            model_name='user',
            name='username',
            field=models.CharField(default=False, max_length=100),
        ),
    ]
