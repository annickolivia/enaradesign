<?php
define('BASE_URL', 'http://localhost/enaradesignagency/');
$site_title = "Enara Design Agency";
$base_url = "http://localhost/enaradesignagency/";
date_default_timezone_set('Europe/Paris');

// Fonctions utiles
function is_current_page($page_name) {
    return basename($_SERVER['PHP_SELF']) === $page_name;
}

