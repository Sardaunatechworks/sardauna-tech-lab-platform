<?php

define('LARAVEL_START', microtime(true));

require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';

// Bootstrap the Laravel Framework Environment
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

echo "====================================================\n";
echo " SARDAUNA TECH LAB - DATABASE MIGRATION & SEEDER\n";
echo "====================================================\n\n";

try {
    // 1. Run Migration 1: Users & Roles
    echo "1. Migrating Users, Roles & Personal Access Tokens...\n";
    $m1 = require __DIR__.'/database/migrations/2026_01_01_000001_create_users_and_roles_tables.php';
    $m1->up();
    echo "   -> SUCCESS: Users, roles & tokens tables created.\n\n";

    // 2. Run Migration 2: Domain Tables
    echo "2. Migrating Sardauna Core Domain Tables (Services, Products, Projects, Team, Enquiries, Settings)...\n";
    $m2 = require __DIR__.'/database/migrations/2026_01_01_000002_create_all_sardauna_domain_tables.php';
    $m2->up();
    echo "   -> SUCCESS: All domain tables created.\n\n";

    // 3. Run Database Seeder
    echo "3. Seeding Database (Admin User, Corporate Profile, 8 Core Services, 2 Products, 3 Case Studies, 8 Team Members)...\n";
    $seeder = new Database\Seeders\DatabaseSeeder();
    $seeder->run();
    echo "   -> SUCCESS: Database seeded with official corporate data.\n\n";

    echo "====================================================\n";
    echo " ALL MIGRATIONS AND SEEDS COMPLETED SUCCESSFULLY!  \n";
    echo "====================================================\n";
} catch (\Throwable $e) {
    echo "\n[ERROR] Migration failed:\n";
    echo $e->getMessage() . "\n";
    echo "\nLocation: " . $e->getFile() . " (Line " . $e->getLine() . ")\n";
}
