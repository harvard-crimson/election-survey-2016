#!/usr/bin/env python
from jinja2 import FileSystemLoader, Template
from jinja2.environment import Environment
import os
import re
import shutil

def copy_dir(html_dir, dname):
    print 'COPYING {0} to {1}...'.format(dname, html_dir + dname),
    if os.path.exists(html_dir + dname):
        shutil.rmtree(html_dir + dname)
    shutil.copytree(dname, html_dir + dname)
    print 'DONE'

def main():
    env = Environment()
    env.loader = FileSystemLoader('.')
    extension = '.html.jinja2'

    files = os.listdir('jinja2')
    html_dir = "compiled_html/"
    if not os.path.exists(html_dir):
        # shutil.rmtree(html_dir)
        os.makedirs(html_dir)
    copy_dir(html_dir, 'css')
    copy_dir(html_dir, 'js')
    copy_dir(html_dir, 'img')
    copy_dir(html_dir, 'fonts')
    copy_dir(html_dir, 'data')

    for fname in files:
        if not fname[0] == '_':
            if fname[-1 * len(extension):] == extension:
                basename = fname[0:-1 * len(extension)]
                if basename == 'index':
                    path = 'compiled_html'
                else:
                    path = os.path.join('compiled_html', basename)
                if not os.path.exists(path):
                    os.makedirs(path)
                with open(os.path.join(path, 'index.html'), 'w+') as f:
                    print 'Compiling ' + fname + '...',
                    f.write(env.get_template('jinja2/' + fname).render({
                            'filename': basename
                        }).encode('utf-8'))
                    print 'done'
    print 'Done'



if __name__ == '__main__':
    main()