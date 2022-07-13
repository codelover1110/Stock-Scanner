from rest_framework import status
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
# from rest_framework import permissions

from backend.models.screenlist import Screenlist
from backend.serializers.screenlist import ScreenlistSerializer

class ScreenlistViewSet(viewsets.ModelViewSet):
    queryset = Screenlist.objects.all()
    serializer_class = ScreenlistSerializer
    # permission_classes = [permissions.IsAuthenticated]

    @api_view(['GET', 'POST'])
    def screen_list(request):
        if request.method == 'GET':
            screenlist = Screenlist.objects.all()
            serializer = ScreenlistSerializer(screenlist, many=True)
            return Response(serializer.data)

        elif request.method == 'POST':
            serializer = ScreenlistSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data,status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)