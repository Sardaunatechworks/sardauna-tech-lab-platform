<?php

define('LARAVEL_START', microtime(true));

require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';

$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);

echo "<h3>Running Sardauna Tech Lab Migrations & Seeds</h3><pre>";

try {
    // 1. Run migrations
    $status = $kernel->call('migrate', ['--force' => true]);
    echo "<b>Migrate Output:</b>\n" . $kernel->output() . "\n\n";

    // 2. Run seeders
    $status = $kernel->call('db:seed', ['--force' => true]);
    echo "<b>Seeder Output:</b>\n" . $kernel->output() . "\n\n";

    echo "<b style='color:green;'>SUCCESS: All database tables migrated and seeded successfully!</b>";
} catch (\Throwable $e) {
    echo "<b style='color:red;'>ERROR:</b> " . $e->getMessage() . "\n" . $e->getTraceAsString();
}

echo "</pre>";
