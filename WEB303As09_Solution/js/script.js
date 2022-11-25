
    $(document).ready(function() {
        $.getJSON("GOT.json").done(function (data) {
            
                $.each(data.cast, function(index, value) {
                    $('tbody').append(`
                    <tr>
                        <td class='name'>${value.FirstName}</td>
                        <td>${value.LastName}</td>
                        <td>${value.Age}</td>
                        <td>${value.Partner}</td>
                        <td>${value.ShowName}</td>
                        <td>${value.DateofBirth}</td>
                    </tr>
                    `);
        
        var compare = {
            name: function(a,b){
                a = a.replace(/^the /i, '');
                b =  b.replace(/^the /i, '');
        
                if (a < b){
                    return -1;
                } else {
                    return a>b ? 1 : 0;
                }
            },
            duration: function(a,b){
                a = a.split(':');
                b = b.split(':');
        
                a = Number(a[0])*60 + Number(a[1]);
                b = Number(b[0])*60 + Number(b[1]);
        
                return a - b;
        
            },
            date: function(a,b){
                a = new Date(a);
                b = new Date(b);
        
                return a - b;
            }
        };
        
        $('.sortable').each(function(){
            var $table = $(this);
            var $tbody = $table.find('tbody');
            var $controls = $table.find('th');
            var rows = $tbody.find('tr').toArray();
        
            $controls.on('click',function(){
                var $header = $(this);
                var order = $header.data('sort');
                var column;
                if ($header.is('.ascending')){
                    $('.cdescending').show();
                    $('.cascending').hide();
                }
                if ($header.is('.descending')){
                    $('.cascending').show();
                    $('.cdescending').hide();
                }
                //If selected item has ascending or descending class, reverse contents
                if ($header.is('.ascending') || $header.is('.descending')){
                    $header.toggleClass('ascending descending');
                   
                    $tbody.append(rows.reverse());
                    
        
                } else {
                    $header.addClass('ascending');
                    //Remove asc or desc from all other headers
                    $header.siblings().removeClass('ascending descending');
                    
                    if (compare.hasOwnProperty(order)){
                        column = $controls.index(this);
                     rows.sort(function(a,b){
                            a = $(a).find('td').eq(column).text();
                            b = $(b).find('td').eq(column).text();
                            console.log('a: ',a,'   b: ', b)
                            return  compare[order](a,b);
                            
                            
                        });
                        $tbody.append(rows);
                    }
                }
                console.log($controls);
            });
            console.log('sortable clicked', $controls);
            })
            })
        })
        });
    