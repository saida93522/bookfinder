import logging
from django.shortcuts import render
import requests
import json

from .credentials import NYBOOK_API, GBOOK_API
from .helper import bestseller_hardcover_fiction


def home(request):
    req = requests.get(f'https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key={NYBOOK_API}').json()
    res = req['results']
    hardcover_fiction = bestseller_hardcover_fiction(res)
    context = {'hardcover_fiction':hardcover_fiction}
    return render(request, 'core/main.html',context)


    
    