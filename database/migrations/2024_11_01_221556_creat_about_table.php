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
        Schema::create('About', function (Blueprint $table) {
            $table->id();
            $table->string('Title_1', 30)->nullable();
            $table->text('Description_1')->nullable();
            $table->string('Title_2', 30)->nullable();
            $table->text('Description_2')->nullable();
            $table->string('Title_3', 30)->nullable();
            $table->text('Description_3')->nullable();
            $table->string('Title_4', 30)->nullable();
            $table->text('Description_4')->nullable();
            $table->string('Title_5', 30)->nullable();
            $table->text('Description_5')->nullable();
            $table->string('Title_6', 30)->nullable();
            $table->text('Description_6')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('About');
    }
};
