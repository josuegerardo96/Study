import pickle
tres1 = [1,3,2, 3,2,1, 2,1,3]
tres2 = [3,1,2, 2,3,1, 1,2,3]
tres3 = [2,3,1, 3,1,2, 1,2,3]

cuatro1 = [4,1,2,3, 2,3,4,1, 3,4,1,2, 1,2,3,4]
cuatro2 = [2,4,3,1, 1,3,2,4, 3,1,4,2, 4,2,1,3]
cuatro3 = [1,3,2,4, 4,2,1,3, 3,1,4,2, 2,4,3,1]

cinco1 = [5,3,4,1,2, 3,1,2,4,5, 2,5,1,3,4, 4,2,3,5,1, 1,4,5,2,3]
cinco2 = [5,1,3,2,4, 2,3,5,4,1, 4,5,2,1,3, 1,2,4,3,5, 3,4,1,5,2]
cinco3 = [1,4,5,2,3, 5,3,4,1,2, 2,5,1,3,4, 3,1,2,4,5, 4,2,3,5,1]

seis1 = [5,6,3,4,1,2, 6,1,4,5,2,3, 4,5,2,3,6,1, 3,4,1,2,5,6, 2,3,6,1,4,5, 1,2,5,6,3,4]
seis2 = [5,6,3,4,1,2, 6,1,4,5,2,3, 4,5,2,3,6,1, 3,4,1,2,5,6, 2,3,6,1,4,5, 1,2,5,6,3,4]
seis3 = [5,6,3,4,1,2, 6,1,4,5,2,3, 4,5,2,3,6,1, 3,4,1,2,5,6, 2,3,6,1,4,5, 1,2,5,6,3,4]

siete1 = [7,5,4,2,1,6,3, 2,7,6,4,3,1,5, 5,3,2,7,6,4,1, 1,6,5,3,2,7,4, 3,1,7,5,4,2,6, 4,2,1,6,5,3,7, 6,4,3,1,7,5,2]
siete2 = [1,6,4,7,2,3,5, 2,7,5,1,3,4,6, 7,5,3,6,1,2,4, 3,1,6,2,4,5,7, 6,4,2,5,7,1,3, 5,3,1,4,6,7,2, 4,2,7,3,5,6,1]
siete3 = [4,6,7,3,1,5,2, 5,7,1,4,2,6,3, 3,5,6,2,7,4,1, 1,3,4,7,5,2,6, 2,4,5,1,6,3,7, 6,1,2,5,3,7,4, 7,2,3,6,4,1,5]

ocho1 = [8,7,3,4,1,5,6,2, 6,1,5,2,7,3,4,8, 4,3,7,8,5,1,2,6, 7,2,6,3,8,4,5,1, 2,5,1,6,3,7,8,4, 1,4,8,5,2,6,7,3, 5,8,4,1,6,2,3,7, 3,6,2,7,4,8,1,5]
ocho2 = [2,5,8,4,6,3,1,7, 8,3,6,2,4,1,7,5, 5,8,3,7,1,6,4,2, 1,4,7,3,5,2,8,6, 7,2,5,1,3,8,6,4, 4,7,2,6,8,5,3,1, 6,1,4,8,2,7,5,3, 3,6,1,5,7,4,2,8]

nueve1 = [6,5,4,3,2,1,9,7,8, 1,9,8,7,6,5,4,2,3, 3,2,1,9,8,7,6,4,5, 2,1,9,8,7,6,5,3,4, 4,3,2,1,9,8,7,5,6, 8,7,6,5,4,3,2,9,1, 5,4,3,2,1,9,8,6,7, 9,8,7,6,5,4,3,1,2, 7,6,5,4,3,2,1,8,9]
nueve2 = [7,6,8,2,5,3,4,1,9, 2,1,3,6,9,7,8,5,4, 6,5,7,1,4,2,3,9,8, 3,2,4,7,1,8,9,6,5, 4,3,5,8,2,9,1,7,6, 5,4,6,9,3,1,2,8,7, 1,9,2,5,8,6,7,4,3, 9,8,1,4,7,5,6,3,2, 8,7,9,3,6,4,5,2,1]

ListaSoluciones = []

ListaSoluciones.append(tres1)
ListaSoluciones.append(tres2)
ListaSoluciones.append(tres3)
ListaSoluciones.append(cuatro1)
ListaSoluciones.append(cuatro2)
ListaSoluciones.append(cuatro3)
ListaSoluciones.append(cinco1)
ListaSoluciones.append(cinco2)
ListaSoluciones.append(cinco3)
ListaSoluciones.append(seis1)
ListaSoluciones.append(seis2)
ListaSoluciones.append(seis3)
ListaSoluciones.append(siete1)
ListaSoluciones.append(siete2)
ListaSoluciones.append(siete3)
ListaSoluciones.append(ocho1)
ListaSoluciones.append(ocho2)
ListaSoluciones.append(nueve1)
ListaSoluciones.append(nueve2)

avrir = open('soluciones.dat','wb')
pickle.dump(ListaSoluciones,avrir)
avrir.close()