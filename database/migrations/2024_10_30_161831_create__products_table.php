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
        Schema::create('Accueil', function (Blueprint $table) {
            $table->id();
            $table->string('Title_1', 35)->nullable();
            $table->text('Description_1',)->nullable();
            $table->text('Description_2')->nullable();
            $table->string('Card_1_Title', 10)->nullable();
            $table->text('Card_1_Description')->nullable();
            $table->string('Card_2_Title', 10)->nullable();
            $table->text('Card_2_Description')->nullable();
            $table->string('Youtube_video_src')->nullable();
            $table->string('Title_2', 20)->nullable();
            $table->text('Description_3')->nullable();
            $table->string('Title_3', 60)->nullable();
            $table->text('Description_4')->nullable();
            $table->string('Card_3_Title', 10)->nullable();
            $table->text('Card_3_Description')->nullable();
            $table->string('Card_4_Title', 10)->nullable();
            $table->text('Card_4_Description')->nullable();
            $table->string('Title_4', 20)->nullable();
            $table->text('Description_5')->nullable();
            $table->string('Title_5', 20)->nullable();
            $table->string('Title_6', 70)->nullable();
            $table->string('Card_5_Title', 20)->nullable();
            $table->text('Card_5_Description')->nullable();
            $table->string('Card_6_Title', 20)->nullable();
            $table->text('Card_6_Description')->nullable();
            $table->string('Card_7_Title', 20)->nullable();
            $table->text('Card_7_Description')->nullable();
            $table->string('Title_7', 20)->nullable();
            $table->text('Description_6')->nullable();
            $table->string('Title_8', 20)->nullable();
            $table->text('Description_7')->nullable();
            $table->string('Title_9', 20)->nullable();
            $table->text('Description_8')->nullable();
            $table->string('Title_10', 30)->nullable();
            $table->text('Description_9')->nullable();
            $table->string('Title_11', 21)->nullable();
            $table->text('Description_10')->nullable();
            $table->string('Title_12', 21)->nullable();
            $table->text('Description_11')->nullable();
            $table->string('Title_13', 21)->nullable();
            $table->text('Description_12')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Accueil');
    }
};
