<?php
$dir = __DIR__ . '/assets/gallery';

$exts = array('jpg', 'jpeg', 'png', 'webp', 'gif', 'avif');
$files = array();

if (is_dir($dir)) {
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
}

if (PHP_SAPI === 'cli') {
    file_put_contents(
        __DIR__ . '/gallery.json',
        json_encode($files, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES)
    );
    echo 'Wrote gallery.json with ' . count($files) . " photo(s).\n";
    exit;
}

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');
echo json_encode($files, JSON_UNESCAPED_SLASHES);