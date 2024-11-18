<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('contacts', function (Blueprint $table) {
            $table->id();
            $table->string('phone_number_1', 14)->nullable();
            $table->string('phone_number_2', 14)->nullable();
            $table->string('contact_email', 40)->nullable();
            $table->string('admin_email', 40)->nullable();
            $table->string('address', 65)->nullable();
            $table->string('linkedin_profile')->nullable();
            $table->string('instagram_profile')->nullable();
            $table->string('facebook_profile')->nullable();
            $table->string('youtube_profile')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contacts');
    }
};
