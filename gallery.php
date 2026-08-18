<?php
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

$dir = __DIR__ . '/assets/gallery';

if (!is_dir($dir)) {
    echo json_encode([]);
    exit;
}

$exts = array('jpg', 'jpeg', 'png', 'webp', 'gif', 'avif');
$files = array();

foreach (scandir($dir) as $name) {
    if ($name === '.' || $name === '..') {
        continue;
    }
    $ext = strtolower(pathinfo($name, PATHINFO_EXTENSION));
    if (in_array($ext, $exts, true)) {
        $files[] = $name;
    }
}

sort($files);
$files = array_reverse($files);

echo json_encode($files, JSON_UNESCAPED_SLASHES);