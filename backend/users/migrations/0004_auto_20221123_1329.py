# Generated by Django 2.2.28 on 2022-11-23 13:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_auto_20221123_1152'),
    ]

    operations = [
        migrations.RenameField(
            model_name='userprofile',
            old_name='is_veified',
            new_name='is_verified',
        ),
    ]
