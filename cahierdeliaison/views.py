# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

from django.views.generic.base import TemplateView

class IndexView(TemplateView):
    template_name = "cahierdeliaison/home.html"
