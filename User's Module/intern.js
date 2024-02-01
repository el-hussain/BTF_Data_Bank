    const studentRadio = document.getElementById('student');
    const corpMemberRadio = document.getElementById('corpMember');
    const studentForm = document.getElementById('studentIntern');
    const corpMemberForm = document.getElementById('nyscIntern');

    studentRadio.addEventListener('click', function(){
      if (studentRadio.checked) {
          studentForm.classList.remove('hidden');
          corpMemberForm.classList.add('hidden');
      } else if (corpMemberRadio.checked) {
          studentForm.classList.add('hidden');
          corpMemberForm.classList.remove('hidden');
      }
  }
    );
    corpMemberRadio.addEventListener('click', function(){
      if (studentRadio.checked) {
          studentForm.classList.remove('hidden');
          corpMemberForm.classList.add('hidden');
      } else if (corpMemberRadio.checked) {
          studentForm.classList.add('hidden');
          corpMemberForm.classList.remove('hidden');
      }
  }
    );
