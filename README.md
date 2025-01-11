<div class="parent">
    <div class="main">
        <div class="container mt-3">
            <div *ngFor="let student of students" class="card">
                <div>
              <div class="card-header">
                <img class="img" height="50px"  src="{{student.school_logo}}" alt="">
                <h6>{{student.school_name}}</h6>
              </div>
            </div>
            <div>
              <div class="card-body"> 
                <div class="details">          
                <span>Name: {{student.name}}</span><br>
                <span>phone:{{student.phone}}</span><br>
                <span>DOB:{{student.dob}}</span><br>
                <span>Email:{{student.email}}</span><br>
                <span>City:{{student.city}}</span>
            </div> 
        </div>
                    <div class="profile">
                        <img height="150px" width="150px" src="{{student.profile_picture}}" alt="">
                    </div>
                    <div>
              </div> 
              <div class="card-footer">
                <div class="f1">
                <span>shoolCity: {{student.school_city}}</span>
                <span>shoolPin: {{student.school_pin}}</span>
            </div>
            <div class="f2">
                <button class="btn btn-warning">Veiw</button>
                <button class="btn btn-primary">Edit</button>
                <button class="btn btn-danger">Delete</button>
            </div>
              </div>
            </div>
            </div>
          </div>
    </div>
</div>
