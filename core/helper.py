import os
import json
import requests
import requests_cache
from datetime import timedelta

from .credentials import NY_BOOKS_API, BOOKS_API

# cache API data
requests_cache.install_cache(cache_name='bestsellers_cache', backend='sqlite', expire_after=timedelta(days=1))


def get_bestsellers_by_genre():
    book_genres = ['hardcover-fiction',
                   'hardcover-nonfiction',
                   'trade-fiction-paperback',
                   'paperback-nonfiction',
                   'young-adult-hardcover',
                   'advice-how-to-and-miscellaneous',
                   'graphic-books-and-manga']
    book_data = []
    for genre in book_genres:
        req = requests.get(f'https://api.nytimes.com/svc/books/v3/lists/current/{genre}.json?api-key={NY_BOOKS_API}').json()
        data = req['results']
        book_data.append(data)
    return book_data