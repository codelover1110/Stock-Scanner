import imp
from django.contrib import admin
from django.urls import path
from backend.views import user,screenlist,frontend

# router = routers.DefaultRouter()
# router.register(r'users', user.UserViewSet)
# router.register(r'screenlist', screenlist.ScreenlistViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', frontend.front, name="front"),
    # path('user/',user.UserViewSet.as_view(), name="user"),
    path('screenlist/', screenlist.ScreenlistViewSet.screen_list, name="screenlist"),
]