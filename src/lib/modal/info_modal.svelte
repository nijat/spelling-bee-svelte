<script lang="ts">
    export let rules = "Pətəkdəki hərflərdən istifadə edərək sözlər qurun. Sözlər minimum 4 hərfdən ibarət olmalıdır. Sözlərdə mütləq “mərkəz hərf” olmalıdır. Lüğətdə müəyyən olmayan, tireli, xüsusi isimlər yoxdur. Sözlərdə hər hərfdən bir neçə dəfə istifadə oluna bilər. Reytinqinizi qaldırmaq üçün xallar toplayın. 4 hərfli sözlərin hər biri 1 xal dəyərindədir. Daha uzun sözlərdə isə hər hərf üçün əlavə 1 xal qazana bilərsiniz. Hər günün oyununda bütün hərflərdən istifadə olunmuş ən az bir ədəd “panqramma” var. Hər panqramma əlavə 7 xal dəyərindədir!"
</script>
<div role="dialog" class="modal">
    <div class="modal_contents">
        <h2 class="modal_title">Qaydalar</h2>
        <p class="modal_content">{@html rules}</p>
        <div class="modal_actions">
            <button on:click>OK</button>
        </div>
    </div>
</div>