<?php

namespace App\Jobs;

use App\Mail\BillUpdate;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class SendBillUpdate implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $name;
    protected $email;
    protected $bill;

    /**
     * SendBillUpdate constructor.
     * @param $name
     * @param $email
     * @param $bill
     */

    public function __construct($name, $email, $bill)
    {
        $this->name = $name;
        $this->email = $email;
        $this->bill = $bill;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        Mail::to($this->email)->send(new BillUpdate($this->name, $this->bill));
    }
}
