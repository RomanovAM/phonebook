var contact_data = [
    {
        number: '+7 (986) 563-33-44',
        surname: 'Иванов',
        name:'Иван',
        patronymic: 'Иванович'
    },
    {
        number: '+7 (536)963-55-76',
        surname: 'Петров',
        name:'Сергей',
        patronymic: 'Степанович'
    },
    {
        number: '+7 (457) 369-22-11',
        surname: 'Сидоров',
        name:'Николай',
        patronymic: 'Гаврилович'
    }
];
var contact_data=[];
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
var Main = React.createClass({
    render: function () {
        return (
            <div className="main">
                <Search/>
                
            </div>
        );
    }
});
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
var Search =React.createClass({
    getInitialState: function(){
        return {searchData: contact_data};
    },
    
    contactSearch: function(e){
        var searchInput = e.target.value.toLowerCase();
        var searchData = contact_data.filter(function(element){
            var searchSurname = element.surname.toLowerCase();
            return searchSurname.indexOf(searchInput) !== -1;
        });
        this.setState({
            searchData: searchData
        });
    },
    render: function (){
        return(
            <div className='mainsearch'>
                <div className='search'>
                    <input className='input' defaultValue='введите Фамилию' onChange={this.contactSearch}/>
                    <button>добавить контакт</button>
                
                </div>
                <List data={this.state.searchData}/>
            </div>
        );
    }
});
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

var Contact = React.createClass({ 

    getInitialState: function() { 
        return { 
            visible: false 
        }; 
    }, 
    detailsClick: function(e) { 
        e.preventDefault(); 
        this.setState({visible: !this.state.visible});
        console.log(Search.props);
    }, 
    render: function() { 
        var number = this.props.data.number, 
            surname = this.props.data.surname, 
            name = this.props.data.name,
            patronymic = this.props.data.patronymic,
            visible = this.state.visible; 
        return ( 
            <div className='list'>
                <p className="contact_number">Телефон: <input value={number}/></p>
                <p className="contact_surname">Фамилия: <input value={surname}/></p>   
                <a className='contact_details' href='#' onClick={this.detailsClick}>{(visible ? 'Скрыть': 'Подробнее')}</a>   
                <p className={"contact_name " + (visible ? '': 'none')}>Имя: <input value={name}/></p>
                <p className={"contact_patronymic " + (visible ? '': 'none')}>Отчество: <input value={patronymic}/></p>
                <div className={"contact_button " + (visible ? '': 'none')}>
                    <button>Редактировать контакт</button>
                    <button>Удалить контакт</button>
                </div>
            </div>    
        ) 
    } 
}); 


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
var List = React.createClass({ 
    render: function() { 
        var data = this.props.data; 
        var list; 
  
        if (data.length > 0) { 
            list = data.map(function(item, index) { 
                return ( 
                    <div key={index}> 
                        <Contact data={item} /> 
                    </div> 
                ) 
            }) 
        } 
        else { 
            list = <p>К сожалению справочник пуст</p> 
        } 
  
        return ( 
            <div className='cntact_list'> 
                {list} 
            </div> 
        ); 
    } 
}); 

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
ReactDOM.render(<Main/>,document.getElementById('root'));