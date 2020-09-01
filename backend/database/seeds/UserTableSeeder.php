<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'name' => 'Администратор',
                'email' => 'shet1990@gmail.com',
                'password' => bcrypt('123456'),
                'bill' => 1000
            ],
            [
                'name' => 'Евгений',
                'email' => 'eugene.sh@upservice.io',
                'password' => bcrypt('123456'),
                'bill' => null
            ]
        ];

        DB::table('users')->insert($data);
    }
}
