let myHTML =
`<div class="boxRow">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
</div>
<div class="boxRow">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
</div>
<div class="boxRow">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
</div>
<div class="boxRow">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
</div>`

$('#boxContainer').append(myHTML);

$('#boxContainer').on('click', '.box', function(){
    let myBox = $(this);
    $(myBox).toggleClass('clicked');
});