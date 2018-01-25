import inspect
import pprint
import importlib
import os
import django
import sys

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "settings")
django.setup()

def super_meow(path):
    symbol = getattr(importlib.import_module('.'.join(path.split('.')[:-1])), path.split('.')[-1])

    if isinstance(symbol, list):
        print(pprint.pformat(symbol, compact=True)[1:-1])
    else:
        try:
            print(inspect.getsource(symbol))
        except Exception as foo:
            pprint.pprint(symbol)


if __name__ == "__main__":
    super_meow(sys.argv[1])
