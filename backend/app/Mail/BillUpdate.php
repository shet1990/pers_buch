<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class BillUpdate extends Mailable
{
    use Queueable, SerializesModels;

    protected $name;
    protected $bill;

    /**
     * BillUpdate constructor.
     * @param $name
     * @param $bill
     */
    public function __construct($name, $bill)
    {
        $this->name = $name;
        $this->bill = $bill;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('mail.bill_update', ['name' => $this->name, 'bill' => $this->bill]);
    }
}
