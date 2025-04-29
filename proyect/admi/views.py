from django.shortcuts import render
# vista inicio
def home(request):
    return render(request, 'home.html')
# vista registro y login
def registro_log(request):
    return render(request, 'log_regis.html')
# vista index
def index(request):
    return render(request, 'index.html')
# vista administrador
def adminis(request):
    return render (request, 'index_admin.html')
# vista sobre nosotros
def acercade(request):
    return render(request, 'SobreNosotros.html')
# vista contacto
def contacto(request):
    return render(request, 'Contactenos.html')

