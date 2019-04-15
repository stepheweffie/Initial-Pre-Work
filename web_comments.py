import os
import glob


def check_web_files(f):
    check = os.stat(f).st_size == 0
    if check is True:
        #print(f + ' is empty')
        return True
    else:
        return False


def write_web_comments(f):
    '''
    Used only on blank files to write comment tags on the first line
    '''
    html = glob.glob("*.html")
    css = glob.glob("*.css")
    js = glob.glob("*.js")
    if '.html' or '.css' or '.js' in f:
        i = f.index('.')
        txt_file = f[:i + 1] + 'txt'
        txt = open(txt_file, 'w', encoding='UTF-8')
        if f in html:
            txt.write('<!-- -->')
        elif f in css:
            txt.write('/* */')
        elif f in js:
            txt.write('// ')
        txt.close()
        nn = str(f)
        os.remove(f)
        os.rename(txt_file, nn)
    else:
        pass


def auto_walk_web_comments():
    use = input('Do you want to write comments to empty files in os.walk? (y or n): ')
    use = str(use)
    if use == 'y':
        directory = os.getcwd()
        walk = os.walk(directory)
        try:
            for file_tup in walk:
                print(file_tup)
                if len(file_tup[1]) != 0:
                    pass
                else:
                    if len(file_tup[-1]) != 0:
                        os.chdir(file_tup[0])
                        for file in file_tup[-1]:
                            #print(file)
                            check = check_web_files(file)
                            #print('file checked')
                            if check is True:
                                #print('file length is 0')
                                write_web_comments(file)
                    else:
                        pass
        except ValueError:
            pass
    else:
        print('This function will write comments to web files.')


def auto_web_comments_in_dir():
    use = input('Do you want to write comments to empty files in current dir? (y or n): ')
    use = str(use)
    if use == 'y':
        directory = os.getcwd()
        for file in os.listdir(directory):
            check = check_web_files(file)
            if check is True:
                write_web_comments(file)
    else:
        print('This function will write comments to web files')


#if __name__ == '__main__':
    #auto_web_comments_in_dir()
    #auto_walk_web_comments()