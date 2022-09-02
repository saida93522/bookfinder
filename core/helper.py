def bestseller_hardcover_fiction(res):
    title = []
    author = []
    for book in res:
        book_details = book['book_details'][0]
        title.append(book_details['title'])
        author.append(book_details['author'])
    return dict(zip(title, author))