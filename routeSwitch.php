<?php

require_once __DIR__ . '/header.php';

abstract class RouteSwitch
{
    protected function home()
    {
        require __DIR__ . '/views/home.php';
    }

    protected function usuarios()
    {
        require __DIR__ . '/views/usuarios.php';
    }
    
    protected function propriedades()
    {
        require __DIR__ . '/views/propriedades.php';
    }

    protected function plantio()
    {
        require __DIR__ . '/views/plantio.php';
    }

    protected function analises()
    {
        require __DIR__ . '/views/analises.php';
    }
    
    public function __call($name, $arguments)
    {
        http_response_code(404);

        $notFoundPage = __DIR__ . '/pages/not-found.html';

        if (file_exists($notFoundPage)) {
            require $notFoundPage;
        } else {
            echo 'Página não encontrada.';
            exit;
        }
    }
}
