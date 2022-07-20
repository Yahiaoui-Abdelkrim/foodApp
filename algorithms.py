num = [1, 2, 0, 0]
k = 34


def sumInt(list, k):
    strnum = ''
    for i in num:
        strnum += str(i)
    sumIntegers = int(strnum) + k
    sumIntegers = [int(i) for i in str(sumIntegers)]
    return sumIntegers


print(sumInt(num, k))
