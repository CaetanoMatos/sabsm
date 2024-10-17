<?php

require_once __DIR__ . '/routeSwitch.php';

$requestUri = $_SERVER['REQUEST_URI'];

class Router extends RouteSwitch
{
    public function run(string $requestUri)
    {
        $route = substr($requestUri, 1);

        if ($route === '') {
            $this->home();
        } else {
            $this->$route();
        }
    }
}