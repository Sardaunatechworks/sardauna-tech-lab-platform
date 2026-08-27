<?php

define('LARAVEL_START', microtime(true));

require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';

$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

header('Content-Type: text/plain');

echo "=== DIAGNOSTIC AUTH & TOKEN GENERATION TEST ===\n\n";

try {
    $email = 'admin@sardaunatechlabs.com.ng';
    $password = 'Sardauna2026!Secure';

    echo "1. Querying User from Database...\n";
    $user = App\Models\User::where('email', $email)->first();
    if (!$user) {
        echo "   [FAIL] Admin user with email '$email' not found in database.\n";
        echo "   -> Run: php migrate.php\n";
        exit(1);
    }
    echo "   [PASS] Found User: {$user->name} (ID: {$user->id}, Role: {$user->role})\n\n";

    echo "2. Validating Password Hash...\n";
    if (!Illuminate\Support\Facades\Hash::check($password, $user->password)) {
        echo "   [FAIL] Password does not match hash.\n";
        exit(1);
    }
    echo "   [PASS] Password matched successfully.\n\n";

    echo "3. Testing Sanctum Token Creation...\n";
    $token = $user->createToken('admin-cms-session')->plainTextToken;
    echo "   [PASS] Token created successfully: " . substr($token, 0, 15) . "...\n\n";

    echo "===============================================\n";
    echo " ALL AUTH CHECKS PASSED WITH ZERO ERRORS!     \n";
    echo "===============================================\n";
} catch (\Throwable $e) {
    echo "\n[ERROR DETECTED]: " . $e->getMessage() . "\n";
    echo "File: " . $e->getFile() . " (Line " . $e->getLine() . ")\n\n";
    echo "Trace:\n" . $e->getTraceAsString() . "\n";
}
