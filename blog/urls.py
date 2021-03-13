from . import views
from django.urls import path

urlpatterns = [
    path('post_list/', views.PostList.as_view(), name='post_list'),
    # path('<slug:slug>/', views.PostDetail.as_view(), name='post_detail'),
    path('<slug:slug>/', views.post_detail, name='post_detail'),
]