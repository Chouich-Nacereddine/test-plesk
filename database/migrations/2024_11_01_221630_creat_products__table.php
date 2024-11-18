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
        Schema::create('Products', function (Blueprint $table) {
            $table->id();
            $table->string('Title_1', 25)->nullable();
            $table->string('Card_1',5)->nullable();
            $table->string('Card_2', 5)->nullable();
            $table->string('Capacité_1', 10)->nullable();
            $table->text('Description_1')->nullable();

            $table->string('Title_2', 25)->nullable();
            $table->string('Card_3', 5)->nullable();
            $table->string('Card_4', 5)->nullable();
            $table->string('Capacité_2', 10)->nullable();
            $table->text('Description_2')->nullable();

            $table->string('Title_3', 25)->nullable();
            $table->string('Card_5', 5)->nullable();
            $table->string('Card_6', 5)->nullable();
            $table->string('Capacité_3', 10)->nullable();
            $table->text('Description_3')->nullable();

            $table->string('Title_4', 25)->nullable();
            $table->text('Description_4')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Products');
    }
};
