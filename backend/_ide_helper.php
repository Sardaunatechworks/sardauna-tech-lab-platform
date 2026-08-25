<?php

/**
 * IDE Helper for Sardauna Tech Lab Ltd - Laravel 11 Backend
 * Provides autocomplete and symbol resolution for IDE language servers.
 */

namespace Illuminate\Http {
    class Request {
        public function all(): array { return []; }
        public function only(array $keys): array { return []; }
        public function input(string $key, mixed $default = null): mixed { return $default; }
        public function has(string $key): bool { return true; }
        public function hasFile(string $key): bool { return true; }
        public function file(string $key): mixed { return null; }
        public function validate(array $rules, array $messages = []): array { return []; }
        public function user(): mixed { return null; }
    }

    class JsonResponse {
        public function header(string $key, string $value): static { return $this; }
    }
}

namespace Illuminate\Database\Eloquent {
    abstract class Model {
        protected $fillable = [];
        protected $casts = [];
        public $id;
        public $created_at;
        public $updated_at;

        public static function find(mixed $id): ?static { return new static(); }
        public static function findOrFail(mixed $id): static { return new static(); }
        public static function create(array $attributes = []): static { return new static(); }
        public static function firstOrCreate(array $attributes = [], array $values = []): static { return new static(); }
        public static function updateOrCreate(array $attributes = [], array $values = []): static { return new static(); }
        public static function where(mixed $column, mixed $operator = null, mixed $value = null): Builder { return new Builder(); }
        public static function whereIn(string $column, array $values): Builder { return new Builder(); }
        public static function all(array $columns = ['*']): Collection { return new Collection(); }
        public static function count(): int { return 0; }
        public static function latest(string $column = 'created_at'): Builder { return new Builder(); }
        public static function orderBy(string $column, string $direction = 'asc'): Builder { return new Builder(); }
        public static function orderByDesc(string $column): Builder { return new Builder(); }
        public static function query(): Builder { return new Builder(); }
        public function update(array $attributes = [], array $options = []): bool { return true; }
        public function delete(): ?bool { return true; }
        public function hasMany(string $related, ?string $foreignKey = null, ?string $localKey = null): Relations\HasMany { return new Relations\HasMany(); }
        public function belongsTo(string $related, ?string $foreignKey = null, ?string $ownerKey = null): Relations\BelongsTo { return new Relations\BelongsTo(); }
    }

    class Builder {
        public function where(mixed $column, mixed $operator = null, mixed $value = null): static { return $this; }
        public function whereIn(string $column, array $values): static { return $this; }
        public function orderBy(string $column, string $direction = 'asc'): static { return $this; }
        public function orderByDesc(string $column): static { return $this; }
        public function latest(string $column = 'created_at'): static { return $this; }
        public function take(int $value): static { return $this; }
        public function get(): Collection { return new Collection(); }
        public function first(): ?Model { return null; }
        public function count(): int { return 0; }
        public function paginate(int $perPage = 15): mixed { return null; }
    }

    class Collection implements \Countable, \IteratorAggregate {
        public function count(): int { return 0; }
        public function getIterator(): \Traversable { return new \ArrayIterator([]); }
        public function pluck(string $value, ?string $key = null): static { return $this; }
        public function toArray(): array { return []; }
    }
}

namespace Illuminate\Database\Eloquent\Relations {
    class HasMany {
        public function orderBy(string $column, string $direction = 'asc'): static { return $this; }
    }
    class BelongsTo {}
}

namespace Illuminate\Foundation\Auth {
    class User extends \Illuminate\Database\Eloquent\Model {}
}

namespace Illuminate\Database\Migrations {
    abstract class Migration {
        abstract public function up(): void;
        abstract public function down(): void;
    }
}

namespace Illuminate\Database\Schema {
    class Schema {
        public static function create(string $table, \Closure $callback): void {}
        public static function dropIfExists(string $table): void {}
    }

    class Blueprint {
        public function id(string $column = 'id'): static { return $this; }
        public function string(string $column, int $length = 255): static { return $this; }
        public function text(string $column): static { return $this; }
        public function longText(string $column): static { return $this; }
        public function integer(string $column): static { return $this; }
        public function unsignedBigInteger(string $column): static { return $this; }
        public function boolean(string $column): static { return $this; }
        public function enum(string $column, array $allowed): static { return $this; }
        public function json(string $column): static { return $this; }
        public function date(string $column): static { return $this; }
        public function timestamp(string $column): static { return $this; }
        public function timestamps(): void {}
        public function rememberToken(): static { return $this; }
        public function morphs(string $name): void {}
        public function foreignId(string $column): static { return $this; }
        public function constrained(?string $table = null): static { return $this; }
        public function cascadeOnDelete(): static { return $this; }
        public function nullOnDelete(): static { return $this; }
        public function nullable(): static { return $this; }
        public function unique(): static { return $this; }
        public function index(string|array|null $columns = null): static { return $this; }
        public function default(mixed $value): static { return $this; }
        public function primary(string|array|null $columns = null): static { return $this; }
    }
}

namespace Illuminate\Database {
    abstract class Seeder {
        abstract public function run(): void;
    }
}

namespace Illuminate\Support\Facades {
    class Route {
        public static function get(string $uri, array|string|\Closure $action): static { return new static(); }
        public static function post(string $uri, array|string|\Closure $action): static { return new static(); }
        public static function put(string $uri, array|string|\Closure $action): static { return new static(); }
        public static function delete(string $uri, array|string|\Closure $action): static { return new static(); }
        public static function prefix(string $prefix): static { return new static(); }
        public static function middleware(string|array $middleware): static { return new static(); }
        public static function group(\Closure $callback): void {}
        public static function apiResource(string $name, string $controller, array $options = []): void {}
    }

    class Hash {
        public static function make(string $value, array $options = []): string { return ''; }
        public static function check(string $value, string $hashedValue): bool { return true; }
    }

    class Validator {
        public static function make(array $data, array $rules, array $messages = []): mixed {
            return new class {
                public function fails(): bool { return false; }
                public function errors(): mixed { return []; }
            };
        }
    }

    class Log {
        public static function info(string $message, array $context = []): void {}
        public static function error(string $message, array $context = []): void {}
    }

    class Auth {
        public static function user(): mixed { return null; }
    }
}

namespace Illuminate\Support {
    class Str {
        public static function slug(string $title, string $separator = '-'): string { return ''; }
        public static function random(int $length = 16): string { return ''; }
    }
}

namespace Laravel\Sanctum {
    trait HasApiTokens {
        public function createToken(string $name, array $abilities = ['*']): mixed {
            return new class { public string $plainTextToken = 'token_abc123'; };
        }
        public function currentAccessToken(): mixed {
            return new class { public function delete(): void {} };
        }
    }
}

namespace {
    if (!function_exists('response')) {
        function response(): mixed {
            return new class {
                public function json(array $data = [], int $status = 200, array $headers = []): \Illuminate\Http\JsonResponse {
                    return new \Illuminate\Http\JsonResponse();
                }
            };
        }
    }

    if (!function_exists('now')) {
        function now(): string {
            return date('Y-m-d H:i:s');
        }
    }

    if (!function_exists('env')) {
        function env(string $key, $default = null) {
            return $default;
        }
    }
}
