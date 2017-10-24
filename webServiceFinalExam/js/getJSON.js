$(function(){
    $(document).ready(function(){

        var items = [];
        $.ajax({
            url: "http://54.84.69.209/jsonbankservice/BankAccounts/GetBankInformation",
            dataType: 'json',
            type: 'get',
            cache: false,
            success: function(data){
                $(data).each(function(index, value){
                    console.log(value);
                    var total = value.accounts[0].Amount + value.accounts[1].Amount + value.accounts[2].Amount;
                    items.push('<tr><td>Owner</td><td>' + value.OwnerName + "</td><tr><td>Account ID</td><td>"+ value.AccountID + '</td></tr><tr><td>Total Amount</td><td>' + 
                              total + '</td></tr>');
                   
                });
                $("#menuItems").append(items.join(''));
            }

       });
        
    });//end click function
});//end inclusive function