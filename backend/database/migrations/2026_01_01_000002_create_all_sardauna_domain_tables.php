<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // 1. Services
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('short_description');
            $table->longText('full_description');
            $table->string('icon')->default('Globe');
            $table->string('hero_title')->nullable();
            $table->text('hero_description')->nullable();
            $table->enum('status', ['active', 'inactive'])->default('active');
            $table->integer('sort_order')->default(0);
            $table->boolean('featured')->default(false);
            $table->json('challenges_solved')->nullable();
            $table->json('deliverables')->nullable();
            $table->json('process_steps')->nullable();
            $table->json('technologies')->nullable();
            $table->string('seo_title')->nullable();
            $table->text('seo_description')->nullable();
            $table->timestamps();

            $table->index('status');
            $table->index('featured');
            $table->index('sort_order');
        });

        Schema::create('service_features', function (Blueprint $table) {
            $table->id();
            $table->foreignId('service_id')->constrained('services')->cascadeOnDelete();
            $table->string('title');
            $table->text('description');
            $table->string('icon')->nullable();
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });

        // 2. Products
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('tagline');
            $table->text('short_description');
            $table->longText('description');
            $table->text('problem')->nullable();
            $table->text('solution')->nullable();
            $table->string('logo')->nullable();
            $table->string('featured_image')->nullable();
            $table->string('website_url')->nullable();
            $table->enum('status', ['in_development', 'live', 'beta'])->default('in_development');
            $table->boolean('featured')->default(true);
            $table->integer('sort_order')->default(0);
            $table->json('target_audience')->nullable();
            $table->json('technologies')->nullable();
            $table->json('screenshots')->nullable();
            $table->string('seo_title')->nullable();
            $table->text('seo_description')->nullable();
            $table->timestamps();

            $table->index('status');
            $table->index('featured');
        });

        Schema::create('product_features', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained('products')->cascadeOnDelete();
            $table->string('title');
            $table->text('description');
            $table->string('icon')->nullable();
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });

        // 3. Industries
        Schema::create('industries', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->text('description');
            $table->json('challenges')->nullable();
            $table->json('opportunities')->nullable();
            $table->json('relevant_services')->nullable();
            $table->string('icon')->default('Store');
            $table->timestamps();
        });

        // 4. Projects & Case Studies
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('client_name');
            $table->string('industry');
            $table->string('service_category');
            $table->text('short_description');
            $table->longText('overview');
            $table->longText('challenge');
            $table->json('requirements')->nullable();
            $table->text('approach')->nullable();
            $table->longText('solution');
            $table->text('outcome');
            $table->string('featured_image')->nullable();
            $table->string('project_url')->nullable();
            $table->string('year', 10)->default('2025');
            $table->enum('status', ['completed', 'ongoing', 'archived'])->default('completed');
            $table->boolean('featured')->default(true);
            $table->integer('sort_order')->default(0);
            $table->json('technologies')->nullable();
            $table->json('system_capabilities')->nullable();
            $table->json('gallery')->nullable();
            $table->string('seo_title')->nullable();
            $table->text('seo_description')->nullable();
            $table->timestamps();

            $table->index('status');
            $table->index('featured');
        });

        // 5. Articles / Insights
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('excerpt');
            $table->longText('content');
            $table->string('featured_image')->nullable();
            $table->string('category')->default('Engineering & Strategy');
            $table->string('author_name')->default('Muhammad Auwal Abubakar');
            $table->string('author_role')->default('Founder & CEO');
            $table->enum('status', ['draft', 'published', 'archived'])->default('published');
            $table->boolean('featured')->default(true);
            $table->date('published_at')->nullable();
            $table->string('read_time')->default('5 min read');
            $table->string('seo_title')->nullable();
            $table->text('seo_description')->nullable();
            $table->timestamps();

            $table->index('status');
            $table->index('featured');
            $table->index('published_at');
        });

        // 6. Careers & Applications
        Schema::create('career_openings', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('department');
            $table->string('location')->default('Dutse, Jigawa State');
            $table->string('employment_type')->default('Full-time');
            $table->text('description');
            $table->json('responsibilities');
            $table->json('requirements');
            $table->json('preferred_skills')->nullable();
            $table->enum('status', ['open', 'closed'])->default('open');
            $table->date('deadline')->nullable();
            $table->timestamps();

            $table->index('status');
        });

        Schema::create('career_applications', function (Blueprint $table) {
            $table->id();
            $table->foreignId('career_id')->nullable()->constrained('career_openings')->nullOnDelete();
            $table->string('career_title');
            $table->string('name');
            $table->string('email');
            $table->string('phone');
            $table->string('location');
            $table->string('portfolio_url')->nullable();
            $table->string('linkedin_url')->nullable();
            $table->string('cv_path')->nullable();
            $table->text('cover_note')->nullable();
            $table->enum('status', ['new', 'reviewing', 'shortlisted', 'rejected', 'hired'])->default('new');
            $table->timestamps();

            $table->index('status');
            $table->index('created_at');
        });

        // 7. Contact Enquiries
        Schema::create('contact_enquiries', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email');
            $table->string('phone')->nullable();
            $table->string('company')->nullable();
            $table->string('enquiry_type')->default('Start a Project');
            $table->string('service')->nullable();
            $table->string('timeline')->nullable();
            $table->string('budget_range')->nullable();
            $table->longText('message');
            $table->string('source')->nullable();
            $table->enum('status', ['new', 'reviewing', 'contacted', 'qualified', 'proposal_sent', 'won', 'lost', 'archived'])->default('new');
            $table->text('admin_notes')->nullable();
            $table->timestamps();

            $table->index('status');
            $table->index('enquiry_type');
            $table->index('created_at');
        });

        // 8. Team Members & Testimonials
        Schema::create('team_members', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('role');
            $table->text('short_bio');
            $table->longText('full_bio');
            $table->string('photo')->nullable();
            $table->string('linkedin_url')->nullable();
            $table->string('github_url')->nullable();
            $table->string('twitter_url')->nullable();
            $table->string('email')->nullable();
            $table->integer('sort_order')->default(0);
            $table->boolean('visible')->default(true);
            $table->timestamps();
        });

        Schema::create('testimonials', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('role');
            $table->string('organization');
            $table->text('testimonial');
            $table->string('photo')->nullable();
            $table->string('organization_logo')->nullable();
            $table->boolean('featured')->default(false);
            $table->enum('status', ['published', 'draft'])->default('published');
            $table->timestamps();
        });

        // 9. Media Assets & Site Settings & Audit Logs
        Schema::create('media', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('file_path');
            $table->string('mime_type', 100);
            $table->unsignedBigInteger('file_size');
            $table->string('disk')->default('local');
            $table->timestamps();
        });

        Schema::create('site_settings', function (Blueprint $table) {
            $table->id();
            $table->string('key')->unique();
            $table->text('value')->nullable();
            $table->timestamps();
        });

        Schema::create('audit_logs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->constrained('users')->nullOnDelete();
            $table->string('action');
            $table->string('entity_type')->nullable();
            $table->unsignedBigInteger('entity_id')->nullable();
            $table->json('old_values')->nullable();
            $table->json('new_values')->nullable();
            $table->string('ip_address', 45)->nullable();
            $table->timestamps();

            $table->index('created_at');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('audit_logs');
        Schema::dropIfExists('site_settings');
        Schema::dropIfExists('media');
        Schema::dropIfExists('testimonials');
        Schema::dropIfExists('team_members');
        Schema::dropIfExists('contact_enquiries');
        Schema::dropIfExists('career_applications');
        Schema::dropIfExists('career_openings');
        Schema::dropIfExists('articles');
        Schema::dropIfExists('projects');
        Schema::dropIfExists('industries');
        Schema::dropIfExists('product_features');
        Schema::dropIfExists('products');
        Schema::dropIfExists('service_features');
        Schema::dropIfExists('services');
    }
};
